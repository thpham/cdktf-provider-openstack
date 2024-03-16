# `dataOpenstackComputeAggregateV2` Submodule <a name="`dataOpenstackComputeAggregateV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackComputeAggregateV2 <a name="DataOpenstackComputeAggregateV2" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2 openstack_compute_aggregate_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer"></a>

```typescript
import { dataOpenstackComputeAggregateV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2(scope: Construct, id: string, config: DataOpenstackComputeAggregateV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config">DataOpenstackComputeAggregateV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config">DataOpenstackComputeAggregateV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHosts` <a name="resetHosts" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetHosts"></a>

```typescript
public resetHosts(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackComputeAggregateV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isConstruct"></a>

```typescript
import { dataOpenstackComputeAggregateV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformElement"></a>

```typescript
import { dataOpenstackComputeAggregateV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackComputeAggregateV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackComputeAggregateV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackComputeAggregateV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackComputeAggregateV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackComputeAggregateV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackComputeAggregateV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `zone`<sup>Required</sup> <a name="zone" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackComputeAggregateV2Config <a name="DataOpenstackComputeAggregateV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.Initializer"></a>

```typescript
import { dataOpenstackComputeAggregateV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackComputeAggregateV2Config: dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#name DataOpenstackComputeAggregateV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.hosts">hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#hosts DataOpenstackComputeAggregateV2#hosts}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#id DataOpenstackComputeAggregateV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#metadata DataOpenstackComputeAggregateV2#metadata}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#name DataOpenstackComputeAggregateV2#name}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#hosts DataOpenstackComputeAggregateV2#hosts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#id DataOpenstackComputeAggregateV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeAggregateV2.DataOpenstackComputeAggregateV2Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_aggregate_v2#metadata DataOpenstackComputeAggregateV2#metadata}.

---



