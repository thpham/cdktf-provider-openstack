# `dataOpenstackComputeLimitsV2` Submodule <a name="`dataOpenstackComputeLimitsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackComputeLimitsV2 <a name="DataOpenstackComputeLimitsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2 openstack_compute_limits_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer"></a>

```typescript
import { dataOpenstackComputeLimitsV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2(scope: Construct, id: string, config: DataOpenstackComputeLimitsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config">DataOpenstackComputeLimitsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config">DataOpenstackComputeLimitsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackComputeLimitsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct"></a>

```typescript
import { dataOpenstackComputeLimitsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement"></a>

```typescript
import { dataOpenstackComputeLimitsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackComputeLimitsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackComputeLimitsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackComputeLimitsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackComputeLimitsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackComputeLimitsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackComputeLimitsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxImageMeta">maxImageMeta</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonality">maxPersonality</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonalitySize">maxPersonalitySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroupRules">maxSecurityGroupRules</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroups">maxSecurityGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroupMembers">maxServerGroupMembers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroups">maxServerGroups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerMeta">maxServerMeta</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalCores">maxTotalCores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalFloatingIps">maxTotalFloatingIps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalInstances">maxTotalInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalKeypairs">maxTotalKeypairs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalRamSize">maxTotalRamSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalCoresUsed">totalCoresUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalFloatingIpsUsed">totalFloatingIpsUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalInstancesUsed">totalInstancesUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalRamUsed">totalRamUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalSecurityGroupsUsed">totalSecurityGroupsUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalServerGroupsUsed">totalServerGroupsUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `maxImageMeta`<sup>Required</sup> <a name="maxImageMeta" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxImageMeta"></a>

```typescript
public readonly maxImageMeta: number;
```

- *Type:* number

---

##### `maxPersonality`<sup>Required</sup> <a name="maxPersonality" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonality"></a>

```typescript
public readonly maxPersonality: number;
```

- *Type:* number

---

##### `maxPersonalitySize`<sup>Required</sup> <a name="maxPersonalitySize" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxPersonalitySize"></a>

```typescript
public readonly maxPersonalitySize: number;
```

- *Type:* number

---

##### `maxSecurityGroupRules`<sup>Required</sup> <a name="maxSecurityGroupRules" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroupRules"></a>

```typescript
public readonly maxSecurityGroupRules: number;
```

- *Type:* number

---

##### `maxSecurityGroups`<sup>Required</sup> <a name="maxSecurityGroups" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxSecurityGroups"></a>

```typescript
public readonly maxSecurityGroups: number;
```

- *Type:* number

---

##### `maxServerGroupMembers`<sup>Required</sup> <a name="maxServerGroupMembers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroupMembers"></a>

```typescript
public readonly maxServerGroupMembers: number;
```

- *Type:* number

---

##### `maxServerGroups`<sup>Required</sup> <a name="maxServerGroups" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerGroups"></a>

```typescript
public readonly maxServerGroups: number;
```

- *Type:* number

---

##### `maxServerMeta`<sup>Required</sup> <a name="maxServerMeta" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxServerMeta"></a>

```typescript
public readonly maxServerMeta: number;
```

- *Type:* number

---

##### `maxTotalCores`<sup>Required</sup> <a name="maxTotalCores" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalCores"></a>

```typescript
public readonly maxTotalCores: number;
```

- *Type:* number

---

##### `maxTotalFloatingIps`<sup>Required</sup> <a name="maxTotalFloatingIps" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalFloatingIps"></a>

```typescript
public readonly maxTotalFloatingIps: number;
```

- *Type:* number

---

##### `maxTotalInstances`<sup>Required</sup> <a name="maxTotalInstances" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalInstances"></a>

```typescript
public readonly maxTotalInstances: number;
```

- *Type:* number

---

##### `maxTotalKeypairs`<sup>Required</sup> <a name="maxTotalKeypairs" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalKeypairs"></a>

```typescript
public readonly maxTotalKeypairs: number;
```

- *Type:* number

---

##### `maxTotalRamSize`<sup>Required</sup> <a name="maxTotalRamSize" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.maxTotalRamSize"></a>

```typescript
public readonly maxTotalRamSize: number;
```

- *Type:* number

---

##### `totalCoresUsed`<sup>Required</sup> <a name="totalCoresUsed" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalCoresUsed"></a>

```typescript
public readonly totalCoresUsed: number;
```

- *Type:* number

---

##### `totalFloatingIpsUsed`<sup>Required</sup> <a name="totalFloatingIpsUsed" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalFloatingIpsUsed"></a>

```typescript
public readonly totalFloatingIpsUsed: number;
```

- *Type:* number

---

##### `totalInstancesUsed`<sup>Required</sup> <a name="totalInstancesUsed" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalInstancesUsed"></a>

```typescript
public readonly totalInstancesUsed: number;
```

- *Type:* number

---

##### `totalRamUsed`<sup>Required</sup> <a name="totalRamUsed" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalRamUsed"></a>

```typescript
public readonly totalRamUsed: number;
```

- *Type:* number

---

##### `totalSecurityGroupsUsed`<sup>Required</sup> <a name="totalSecurityGroupsUsed" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalSecurityGroupsUsed"></a>

```typescript
public readonly totalSecurityGroupsUsed: number;
```

- *Type:* number

---

##### `totalServerGroupsUsed`<sup>Required</sup> <a name="totalServerGroupsUsed" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.totalServerGroupsUsed"></a>

```typescript
public readonly totalServerGroupsUsed: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackComputeLimitsV2Config <a name="DataOpenstackComputeLimitsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.Initializer"></a>

```typescript
import { dataOpenstackComputeLimitsV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackComputeLimitsV2Config: dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#project_id DataOpenstackComputeLimitsV2#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#id DataOpenstackComputeLimitsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeLimitsV2.DataOpenstackComputeLimitsV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_limits_v2#region DataOpenstackComputeLimitsV2#region}.

---



