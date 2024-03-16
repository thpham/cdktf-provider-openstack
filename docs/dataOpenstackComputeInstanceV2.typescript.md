# `dataOpenstackComputeInstanceV2` Submodule <a name="`dataOpenstackComputeInstanceV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackComputeInstanceV2 <a name="DataOpenstackComputeInstanceV2" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2 openstack_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2(scope: Construct, id: string, config: DataOpenstackComputeInstanceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config">DataOpenstackComputeInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config">DataOpenstackComputeInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNetwork` <a name="putNetwork" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.putNetwork"></a>

```typescript
public putNetwork(value: IResolvable | DataOpenstackComputeInstanceV2Network[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]

---

##### `resetNetwork` <a name="resetNetwork" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetUserData` <a name="resetUserData" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.resetUserData"></a>

```typescript
public resetUserData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackComputeInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackComputeInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackComputeInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackComputeInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackComputeInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV4">accessIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV6">accessIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorName">flavorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.network">network</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList">DataOpenstackComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userData">userData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessIpV4`<sup>Required</sup> <a name="accessIpV4" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV4"></a>

```typescript
public readonly accessIpV4: string;
```

- *Type:* string

---

##### `accessIpV6`<sup>Required</sup> <a name="accessIpV6" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.accessIpV6"></a>

```typescript
public readonly accessIpV6: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `flavorName`<sup>Required</sup> <a name="flavorName" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.flavorName"></a>

```typescript
public readonly flavorName: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.network"></a>

```typescript
public readonly network: DataOpenstackComputeInstanceV2NetworkList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList">DataOpenstackComputeInstanceV2NetworkList</a>

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `updated`<sup>Required</sup> <a name="updated" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | DataOpenstackComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `userData`<sup>Required</sup> <a name="userData" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackComputeInstanceV2Config <a name="DataOpenstackComputeInstanceV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.Initializer"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackComputeInstanceV2Config: dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#id DataOpenstackComputeInstanceV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.network">network</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#region DataOpenstackComputeInstanceV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#user_data DataOpenstackComputeInstanceV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#id DataOpenstackComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.network"></a>

```typescript
public readonly network: IResolvable | DataOpenstackComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#network DataOpenstackComputeInstanceV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#region DataOpenstackComputeInstanceV2#region}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Config.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/compute_instance_v2#user_data DataOpenstackComputeInstanceV2#user_data}.

---

### DataOpenstackComputeInstanceV2Network <a name="DataOpenstackComputeInstanceV2Network" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network.Initializer"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackComputeInstanceV2Network: dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackComputeInstanceV2NetworkList <a name="DataOpenstackComputeInstanceV2NetworkList" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.get"></a>

```typescript
public get(index: number): DataOpenstackComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOpenstackComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>[]

---


### DataOpenstackComputeInstanceV2NetworkOutputReference <a name="DataOpenstackComputeInstanceV2NetworkOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer"></a>

```typescript
import { dataOpenstackComputeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

---

##### `mac`<sup>Required</sup> <a name="mac" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOpenstackComputeInstanceV2Network;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.dataOpenstackComputeInstanceV2.DataOpenstackComputeInstanceV2Network">DataOpenstackComputeInstanceV2Network</a>

---



